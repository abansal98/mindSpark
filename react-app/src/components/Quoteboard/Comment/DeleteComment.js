// import React, {Component} from 'react';

// class DeleteComment extends Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state = {
//             show: false
//         }

//         this.handleClose = this.handleClose.bind(this);
//         this.handleShow = this.handleShow.bind(this);
//     }

//     handleClose() {
//         this.setState({ show: false });
//     }

//     handleShow() {
//         this.setState({ show: true });
//     }

//     render() {
//         return (
//             <Modal show={this.state.show} onHide={this.handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Do you really want to delete this?</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     Hi
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <button variant="primary" onClick={this.handleClose}>
//                         Yes
//                     </button>
//                     <button variant="secondary" onClick={this.handleClose}>
//                         No
//                     </button>
//                 </Modal.Footer>
//             </Modal>
//         )
//     }
// }

// export default DeleteComment;