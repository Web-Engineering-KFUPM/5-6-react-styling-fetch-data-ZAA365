import React from "react";
import { Modal, Button } from "react-bootstrap";

function UserModal({ show, user, onHide }) {
  if (!user) return null;

  return (
    <>
      {/* TODO 3.2: Replace this placeholder with a React-Bootstrap <Modal> */}
      {/* TODO 3.2: Modal must use show={show} and onHide={onHide} */}
      {/* TODO 3.2: Must include Header/Title/Body/Footer + Close button */}
      {/* TODO 3.2: Body must show avatar (user-avatar-large) + name/email/phone/website */}
    </>
  );
}

export default UserModal;

/*TODO 3.2 -  File: src/components/UserModal.jsx
Implement:
- Replace placeholder with a React-Bootstrap <Modal>
- show prop controls visibility, onHide closes it (also enables the X button)
- Title MUST be: "User Details"
- Body MUST show:
  - Large avatar: first letter of user name (CSS class "user-avatar-large")
  - Name, Email, Phone, Website (each in its own <p>)
- Footer MUST have ONE Close button that triggers onHide

Hint:
- Use Modal subcomponents: Header/Title/Body/Footer.
- For the avatar, use user.name.charAt(0) and the className "user-avatar-large".
- The close button should call onHide when clicked.*/
   <Modal
   show={ show }
   onHide={ onHide }
   >
   <Modal.Header closeButton>
      <Modal.Title>
         { "User Details" }
      </Modal.Title>
   </Modal.Header>
 (user-avatar-large) + name/email/phone/website
   <Modal.Body>
      <div className="user-avatar-large">
         { user.name.charAt(0) }
      </div>

      <p><strong>Name:</strong> {  TODO}</p>
      <p><strong>Email:</strong> { TODO }</p>
      <p><strong>Phone:</strong> { TODO }</p>
      <p><strong>Website:</strong> { TODO }</p>
   </Modal.Body>

   <Modal.Footer>
      <Button
         variant="secondary"
         onClick={ close }
      >
         Close
      </Button>
   </Modal.Footer>
   </Modal>
