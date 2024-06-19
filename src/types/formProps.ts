
export interface FormProps {
    titulo: string
    onSubmit: ( event: React.FormEvent<HTMLFormElement>) => void
    label_user: string
    label_password_1: string
    label_password_2?: string

}