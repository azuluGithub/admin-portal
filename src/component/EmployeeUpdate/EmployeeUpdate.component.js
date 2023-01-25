import { PureComponent } from 'react';
// import Resizer from "react-image-file-resizer";
import { FaCamera } from 'react-icons/fa';

import Button from '../Button';
import Editor from '../Editor';
import './EmployeeUpdate.style.scss';

class EmployeeUpdateComponent extends PureComponent {

  state = {
    file: null,
    imgUrl: '',
    title: '',
    author: '',
    content: '',
    category: '',
    date: '',
  }

  setData() {
    const { employee } = this.props;

    if (employee) {
      const { imgUrl, title, content, category, author, date } = employee;

      this.setState({
        imgUrl, 
        title, 
        content, 
        category, 
        author, 
        date
      });
    }
  }

  componentDidMount() {
    this.setData();
  }

  componentDidUpdate() {
    this.setData();
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
      <div className='relative mb-4'>
        {
          !imgUrl.length ?
            <div className='h-40 rounded-md bg-gray-100'></div>
            :
            <img
              className='w-full h-40 object-cover rounded-md'
              src={imgUrl} 
              alt='employee display'
            />
        }
        <label className="absolute bottom-1 right-1" htmlFor="employee_img_upload">
          <div className='bg-white rounded-full p-2 cursor-pointer'>
            <FaCamera 
              style={{ fontSize: '20px' }}
            />
          </div>
          <input
            style={{display:"none"}}
            id="employee_img_upload"
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

  renderEmployeeUpdate() {
    const { currentColor } = this.props;

    return (
      <div className='p-10 bg-white'>
        <form onSubmit={() => this.handleFormSubmit()}>
          <h2 className='text-xl text-bold mb-4 uppercase'>{'Update employee'}</h2>
          { this.renderImage() }
          { this.renderTitle() }
          { this.renderCustomSelect() }
          { this.renderDate() }
          { this.renderAuthor() }
          { this.renderContent() }
          <div className='mt-5'>
            <Button
              color="white" 
              bgColor={currentColor} 
              text="Update" 
              borderRadius="10px" 
              // width="full" 
            />
          </div>
        </form>
      </div>
    );
  }

  render() {
    return this.renderEmployeeUpdate();
  }
}

export default EmployeeUpdateComponent;