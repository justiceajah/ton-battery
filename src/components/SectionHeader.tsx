interface Props {
    title: string
}
export default function SectionHeader({ title }: Props) {
    return (
        <h2 className="text-[28px] pl-10 lg:pl-40 font-semibold mb-10">{title}</h2>
    )
}