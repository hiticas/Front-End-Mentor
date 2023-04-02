import './Tab.scss'

type TabProps = {
    className: string;
    section: number;
    label: string;
    onClick: () => void;
};

const Tab = ({ section, label, className, onClick }: TabProps) => {
    return (
        <div className={className} onClick={onClick}>
            <div className='section_number'>{section}</div>
            <div className='section_details'>
                <p>Step{section}</p>
                <h3>{label}</h3>
            </div>
        </div>
    )
}

export default Tab