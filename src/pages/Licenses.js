import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Wrapper from '../Components/Wrapper';
import System from '../Components/System';
import { setFiles, deleteImage } from '../store/action/resource';
import UploadFiles from '../Components/UploadFiles';

class Licenses extends Component {
  static propTypes = {
    pageInfo: PropTypes.object.isRequired,
    files: PropTypes.array.isRequired,
    setFiles: PropTypes.func.isRequired,
    deleteImage: PropTypes.func.isRequired,
  };

  handleChange = (ev) => {
    const { REACT_APP_MAX_IMAGE_UPLOAD_FILE_SIZE } = process.env;

    try {
      _.map(ev.target.files, (f) => {
        if (f.size > +REACT_APP_MAX_IMAGE_UPLOAD_FILE_SIZE) {
          throw new Error('Upload file must be less then 5mb!');
        }

        if (!/\.(jpg|png)/g.test(f.name)) {
          throw new Error('Upload file must be jpg or png!');
        }
      });

      this.props.setFiles(ev);
    } catch (error) {
      alert(error);
    }

    ev.target.value = '';
  };

  deleteImage = (index) => {
    this.props.deleteImage(index);
  }

  render() {
    const { pageInfo, files } = this.props;

    return (
      <Wrapper>
        <div className="container-fluid licence">
          <div className="row-cols-6">
            <h2 className="systemTitle">Systems</h2>
          </div>
          <ul>
            <li className="row-cols-6 colNames">
              <div className="col-4">
                <p>System Name</p>
              </div>
              <div className="col-2">
                <p>ID</p>
              </div>
              <div className="col-2">
                <p>Created date</p>
              </div>
              <div className="col-2">
                <p>Active Licenses</p>
              </div>
            </li>
            <li>
              <div id="accordion">
                {_.map(pageInfo.systems, (p) => (
                  <System data={p} key={p.id} />
                ))}
              </div>
            </li>
          </ul>
          <div className="row-cols-6 addSystem">
            <h2 className="systemTitle">Add System</h2>
          </div>
          <div className="imageBlock">
            <UploadFiles
              deleteImage={this.deleteImage}
              files={files}
              accept="image/png, image/jpeg"
              fileUpload={this.handleChange}
            />
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  pageInfo: state.resource.pageInfo,
  files: state.resource.files,
});

const mapDispatchToProps = {
  setFiles,
  deleteImage,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Licenses);

export default Container;
