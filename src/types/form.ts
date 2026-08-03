export type QueryType = "General Enquiry" | "Support Request"

export interface FormValues {
  firstName: string
  secondName: string
  email: string
  queryType: QueryType
  message: string
  consent: boolean
}
