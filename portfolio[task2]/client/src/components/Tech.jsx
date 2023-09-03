import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="flex flex-col" key={technology.name}>
          <div className="w-28 h-28">
            <BallCanvas icon={technology.icon} name={technology.name} />
          </div>
          <h4 className='text-slate-400 mx-auto'>{technology.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default SectionWrapper(Tech, "")