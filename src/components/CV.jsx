import profile from '../projectImages/profile-picture.jpg';

const CV = () => {
  return (
    <div className='row p-3'>
      <div className='cv col-md-6 pl-3 pr-3'>
        <h5 className='cv-heading'>EDUCATION</h5>
        <h2 className='cv-content'>makerere university, 2019-present</h2>
        <h5 className='cv-heading'>CONTACT INFO</h5>
        <h2 className='cv-content'>+256 771 754 118</h2>
        <h2 className='cv-content'>+256 703672010</h2>
        <h5 className='cv-heading'>SOCIAL LINKS</h5>
        <h2 className='cv-content'>facebook</h2>
        <h2 className='cv-content'>twitter</h2>
        <h5 className='cv-heading'>OBJECTIVES</h5>
        <h2 className='cv-content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          similique!
        </h2>
        <h5 className='cv-heading'>EXPERIENCE</h5>
        <h2 className='cv-content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          similique!
        </h2>
      </div>
      <div className='col-md-6 '>
        <img src={profile} alt='' className='img-fluid img-center' />
      </div>
    </div>
  );
};

export default CV;
