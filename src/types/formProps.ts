
export interface FormProps {
    titulo: string
    onSubmit: ( event: React.FormEvent<HTMLFormElement>) => void
    label1: string
    label2: string
    label3?: string

}