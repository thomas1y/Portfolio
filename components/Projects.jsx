import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import addisImg from '../public/assets/projects/addis.png';
import yenetaImg from '../public/assets/projects/yeneta.png'
import gulitImg from '../public/assets/projects/gulit.png'
import jobportalImg from '../public/assets/projects/jobportal.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='E-commerce Platform'
            backgroundImg={gulitImg}
            projectUrl='/gulit'
            tech='React JS'
          />
          <ProjectItem
            title='Restaurant ordering App'
            backgroundImg={addisImg}
            projectUrl='/addis'
            tech='React JS'

          />
          <ProjectItem
            title='Learning Managment System'
            backgroundImg={yenetaImg}
            projectUrl='/yeneta'
            tech='React JS'

          />
          <ProjectItem
            title='Job portal App'
            backgroundImg={jobportalImg}
            projectUrl='/jobportal'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
