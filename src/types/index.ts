export interface loginData {
    username: string,
    password: string,
    scope: string
}

export interface registerData {
    username: string,
    password: string,
    scope: string
}

export interface resetPasswordFormData {
    password1: string,
    password2: string,
}

export interface resetPasswordData {
    password: string,
}

export interface accountInterface {
    id: string,
    name: string,
    username: string,
    enabled: boolean,
    tenants: tenants[]
}

export interface tenants {
    id: string,
    description: string,
    enabled: boolean,
    deleted: boolean,
    role: role[]
}

export interface role {
    id: string,
    description: string,
    enabled: boolean
}

export interface menuFetchData {
    tenantId: string,
    token: string
}