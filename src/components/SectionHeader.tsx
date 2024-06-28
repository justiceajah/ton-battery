interface Props {
    title: string
}
export default function SectionHeader({ title }: Props) {
    return (
        <h2 className="text-lg pl-10 font-semibold mb-10">{title}</h2>
    )
}