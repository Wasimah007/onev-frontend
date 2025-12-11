// API Service Layer for Timesheet Application
// This would connect to FastAPI backend with MySQL database

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

interface User {
  users_id: string;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  phone?: string;
  department?: string;
  employee_id?: string;
  hire_date?: string;
  hourly_rate?: number;
  group: string;
  is_active: boolean;
}

interface Project {
  projects_id: string;
  name: string;
  description?: string;
  client_name?: string;
  project_code?: string;
  start_date?: string;
  end_date?: string;
  budget?: number;
  hourly_rate?: number;
  status: string;
  is_billable: boolean;
}

interface Timesheet {
  timesheet_id: string;
  projects_assignments_id: string;
  monday?: number;
  tuesday?: number;
  wednesday?: number;
  thursday?: number;
  friday?: number;
  saturday?: number;
  sunday?: number;
  start_date: string;
  end_date: string;
  total_hours_worked: number;
  status: string;
  notes?: string;
  bill_code: string;
}

interface DashboardStats {
  total_hours: number;
  active_projects: number;
  pending_approvals: number;
  team_members?: number;
}

interface LeaveRequest {
  leave_requests_id: string;
  users_id: string;
  leave_type: string;
  start_date: string;
  end_date: string;
  total_days: number;
  reason?: string;
  status: string;
  approved_at?: string;
  rejection_reason?: string;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }
      
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Authentication
  async login(email: string, password: string): Promise<ApiResponse<{ token: string; user: User }>> {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async logout(): Promise<ApiResponse<null>> {
    return this.request('/auth/logout', {
      method: 'POST',
    });
  }

  // Users
  async getUsers(): Promise<ApiResponse<User[]>> {
    return this.request('/users');
  }

  async getUser(userId: string): Promise<ApiResponse<User>> {
    return this.request(`/users/${userId}`);
  }

  async createUser(userData: Partial<User>): Promise<ApiResponse<User>> {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async updateUser(userId: string, userData: Partial<User>): Promise<ApiResponse<User>> {
    return this.request(`/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  // Projects
  async getProjects(): Promise<ApiResponse<Project[]>> {
    return this.request('/projects');
  }

  async getProject(projectId: string): Promise<ApiResponse<Project>> {
    return this.request(`/projects/${projectId}`);
  }

  async createProject(projectData: Partial<Project>): Promise<ApiResponse<Project>> {
    return this.request('/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
  }

  // Timesheets
  async getTimesheets(userId?: string, startDate?: string, endDate?: string): Promise<ApiResponse<Timesheet[]>> {
    const params = new URLSearchParams();
    if (userId) params.append('user_id', userId);
    if (startDate) params.append('start_date', startDate);
    if (endDate) params.append('end_date', endDate);
    
    const queryString = params.toString();
    return this.request(`/timesheets${queryString ? `?${queryString}` : ''}`);
  }

  async getTimesheet(timesheetId: string): Promise<ApiResponse<Timesheet>> {
    return this.request(`/timesheets/${timesheetId}`);
  }

  async createTimesheet(timesheetData: Partial<Timesheet>): Promise<ApiResponse<Timesheet>> {
    return this.request('/timesheets', {
      method: 'POST',
      body: JSON.stringify(timesheetData),
    });
  }

  async updateTimesheet(timesheetId: string, timesheetData: Partial<Timesheet>): Promise<ApiResponse<Timesheet>> {
    return this.request(`/timesheets/${timesheetId}`, {
      method: 'PUT',
      body: JSON.stringify(timesheetData),
    });
  }

  async submitTimesheet(timesheetId: string): Promise<ApiResponse<Timesheet>> {
    return this.request(`/timesheets/${timesheetId}/submit`, {
      method: 'POST',
    });
  }

  async approveTimesheet(timesheetId: string): Promise<ApiResponse<Timesheet>> {
    return this.request(`/timesheets/${timesheetId}/approve`, {
      method: 'POST',
    });
  }

  // Dashboard Stats
  async getDashboardStats(userId?: string): Promise<ApiResponse<DashboardStats>> {
    const params = userId ? `?user_id=${userId}` : '';
    return this.request(`/dashboard/stats${params}`);
  }

  // Leave Requests
  async getLeaveRequests(userId?: string): Promise<ApiResponse<LeaveRequest[]>> {
    const params = userId ? `?user_id=${userId}` : '';
    return this.request(`/leave-requests${params}`);
  }

  async createLeaveRequest(leaveData: Partial<LeaveRequest>): Promise<ApiResponse<LeaveRequest>> {
    return this.request('/leave-requests', {
      method: 'POST',
      body: JSON.stringify(leaveData),
    });
  }

  async approveLeaveRequest(requestId: string): Promise<ApiResponse<LeaveRequest>> {
    return this.request(`/leave-requests/${requestId}/approve`, {
      method: 'POST',
    });
  }
}

export const apiService = new ApiService();
export type { User, Project, Timesheet, ApiResponse, DashboardStats, LeaveRequest };