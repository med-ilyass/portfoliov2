

const skills = ['React', 'JavaScript', 'Playwright'];

export default function Skills() {
    return (
        <section>{skills.map(skill => (<span key={skill}>{skill}</span>))}</section>
    )
}