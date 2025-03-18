import React, { useState } from "react";
import "./App.css";
import notificationData from "./notifications";

/* Heading and number of notifications */
const NotificationsHeading = ({ heading, style, children }) => {
  return (
    <div className="text-center mt-4">
      <h1 style={style}>{heading}</h1>
      {children}
    </div>
  );
};

/* ID */
function Id({ id }) {
  return <h3 className="notification-id">{id}</h3>;
}

/* Name */
function Name({ name }) {
  return <h2 className="notification-name">{name}</h2>;
}

/* Message */
function Message({ message }) {
  return <p className="notification-message">{message}</p>;
}

/* Clear */
function Clear({ clear }) {
  return (
    <div className="d-flex justify-content-center mb-2">
      <button className="btn btn-warning btn-sm" onClick={clear}>
        Clear
      </button>
    </div>
  );
}

/* Clear All */
function ClearAll({ clearAll }) {
  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-outline-danger btn-lg mb-5" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
}

/* All notifications */
function Notifications({ notifications, onClear }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {notifications.map((notification) => (
          <div className="col-md-6" key={notification.id}>
            <div className="notification-card">
              <Id id={notification.id} />
              <Name name={notification.name} />
              <Message message={notification.message} />
              <Clear clear={() => onClear(notification.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const style = {
    fontWeight: "bold",
    fontSize: "45px",
    textAlign: "center",
  };

  const [notifications, setNotifications] = useState(notificationData);

  const clearAll = () => {
    setNotifications([]);
  };

  const clearNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <div className="app-container">
      <NotificationsHeading heading="Notifications" style={style}>
        <p className="fs-3 text-center mt-4 mb-4">
          {notifications.length > 0
            ? `You have ${notifications.length} notifications`
            : `You don't have notifications`}
        </p>
      </NotificationsHeading>

      <Notifications
        notifications={notifications}
        onClear={clearNotification}
      />

      <ClearAll clearAll={clearAll} />
    </div>
  );
}

export default App;
