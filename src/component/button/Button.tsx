import { ReactNode } from 'react'

type Props = {
    icon?: ReactNode | null
    title: string
    variant?: 'primary' | 'secondary'
    onClick?: () => void
}

export default function Button({ icon = null, title, variant = 'primary', onClick }: Props) {
    const variantObject = {
        primary: 'border-primary text-primary',
        secondary: 'border-primary text-white bg-primary',
    }

    return (
        <button
            onClick={onClick}
            className={`border-[1px] rounded-md px-4 py-2 text-lg font-bold ${variantObject[variant]}`}
        >
            <div className="flex items-center justify-center gap-2">
                {icon && <div className="w-6 h-6">{icon}</div>}
                <p>{title}</p>
            </div>
        </button>
    )
}
