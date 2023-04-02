import './Section.scss'

type SectionProps = {
    title: string;
    subTitle: string;
    children: any;
};

const Section = ({ title, subTitle, children }: SectionProps) => {
  return ( <>
        <div className="header">
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
        </div>
        {children}
    </>
  )
}

export default Section