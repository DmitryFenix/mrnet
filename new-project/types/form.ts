export interface FormData {
  name: string
  contacts: string
  phone: string
  inn: string
  consent: boolean
}

export interface FormErrors {
  name?: string
  contacts?: string
  phone?: string
  inn?: string
  consent?: string
}

