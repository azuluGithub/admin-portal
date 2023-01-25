import { PureComponent } from 'react';
// import Resizer from "react-image-file-resizer";
import { FaCamera } from 'react-icons/fa';

import Button from '../Button';
import Editor from '../Editor';
import './EmployeeCreate.style.scss';

class EmployeeCreateComponent extends PureComponent {

  state = {
    file: null,
    imgUrl: '',
    title: '',
    author: '',
    content: '',
    category: '',
    date: '',
  }

  handleFileChange(e) {
    e.preventDefault();

    // if (e.target.files[0]) {
    //   try {
    //     Resizer.imageFileResizer(
    //       e.target.files[0], 250, 300, "JPEG", 100, 0,
    //       (uri) => { 
    //         this.setState({ file: uri });
    //           //dispatch an upload image to cloudinary

    //           //if url comes from cloudinary, set to url on state
    //       }, "base64", 200, 200
    //     );
    //   } 
    //   catch (err) {
    //     //console.log(err);
    //   }
    // }
  }

  handleInputChange(e) {
    const { name, value } = e.target

    this.setState({ [name]:  value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    //make request to server
  }

  renderImage() {
    const { imgUrl } = this.state;

    return (
      <div className='relative w-40 h-40'>
        {
          !imgUrl.length ?
            <div className='w-40 h-40 rounded-full bg-gray-100'></div>
            :
            <img
              className='w-40 h-40 object-cover rounded-full'
              src={imgUrl} 
              alt='news display'
            />
        }
        <label className="absolute bottom-1 right-1" htmlFor="news_img_upload">
          <div className='bg-white rounded-full p-2 cursor-pointer'>
            <FaCamera 
              style={{ fontSize: '20px' }}
            />
          </div>
          <input
            style={{display:"none"}}
            id="news_img_upload"
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => this.handleFileChange(e)}
          />
        </label>
      </div>
    );
  }

  renderCategory(category) {
    const { _id, name } = category;

    return (
      <option key={_id} value="name">{name}</option>
    );
  }

  renderCustomSelect() {
    const { categories } = this.props;

    if (!categories.length) {
      return <></>;
    }

    return (
      <div className='mb-6'>
        <label className='capitalize text-gray-400 mb-2 text-bold'>Category</label>
        <select 
          className='Select w-full' 
          value="" 
          placeholder='' 
          onChange={() => {}}
        >
          { categories.map(this.renderCategory) }
        </select>
      </div>
    )
  }

  renderTitle() {
    const { title } = this.state;

    return (
      <div className='mb-6'>
        <label className='capitalize text-gray-400 mb-2 text-bold'>Title</label>
        <input
          className='FormInputBottom'
          type="text" 
          name="title"
          value={title}
          onChange={(e) => this.handleInputChange(e)}
        />
      </div>
    );
  }

  renderAuthor() {
    const { author } = this.state;

    return (
      <div className='mb-6'>
        <label className='capitalize text-gray-400 mb-2 text-bold'>Author</label>
        <input
          className='FormInputBottom'
          type="text" 
          name="author"
          value={author}
          onChange={(e) => this.handleInputChange(e)}
        />
      </div>
    );
  }

  renderDate() {
    const { date } = this.state;
    
    return (
      <div className='mb-6'>
        <label className='capitalize text-gray-400 mb-2 text-bold'>Date</label>
        <input
          className='FormInputBottom'
          type="date" 
          name="date"
          value={date}
          onChange={(e) => this.handleInputChange(e)}
        />
      </div>
    );
  }

  renderContent() {
    // const { content } = this.state;

    return (
      <div className='mb-6'>
        <p className='capitalize text-gray-400 mb-2 text-bold'>{"content"}</p>
        <Editor />
      </div>
    );
  }

  renderEmployeeCreate() {
    const { currentColor } = this.props;

    return (
      <div className='bg-white'>
        <form onSubmit={() => this.handleFormSubmit()}>
          <h2 className='text-xl p-5 text-bold mb-4 uppercase'>{'Create Employee'}</h2>
          <div className='md:flex w-full'>
            <div className='flex justify-center p-5 w-full md:w-1/3'>
              { this.renderImage() }
            </div>
            <div className='p-5 w-full md:w-1/3'>
              { this.renderTitle() }
              { this.renderCustomSelect() }
              { this.renderDate() }
            </div>
            <div className='p-5 w-full md:w-1/3'>
              { this.renderAuthor() }
              { this.renderContent() }
              <div className='mt-5'>
                <Button
                  color="white" 
                  bgColor={currentColor} 
                  text="Create" 
                  borderRadius="10px"
                  // width="full" 
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

  render() {
    return this.renderEmployeeCreate();
  }
}

export default EmployeeCreateComponent;