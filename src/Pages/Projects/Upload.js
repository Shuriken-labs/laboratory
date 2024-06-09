import { useState } from "react";
// import closeBtn from "../asserts/carbon_close-filled.png";

const Upload = () => {
  const [modal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="__download_btn1 __ar_one_sans mr-3 text-white "
      >
        Upload
      </button>

      {modal && (
        <div className="modal pt-[59rem]">
          <div onClick={toggleModal} className="overlay" />
          <div className="modal-content">
            <div className="__join_waitlist">
              <div className="__close_btn">
                {/* <img
                  src={closeBtn}
                  className="cursor-pointer"
                  onClick={closeModal}
                /> */}
              </div>
              <div className="__join_waitlist_content">
                <h2 className="__ar_one_sans text-white text-3xl">
                  Join Waitlist
                </h2>

                <form className="__join_waitlist_form items-center justify-center mt-5">
                  <div>
                    <h1 className="__ar_one_sans text-white text-xl pr-[13rem] font-light">
                      Your Name
                    </h1>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="__waitlist_form"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                  </div>
                  <div className="mt-3">
                    <h1 className="__ar_one_sans text-white text-xl pr-[13rem] font-light">
                      Your Email
                    </h1>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="__waitlist_form"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                  <div className="mt-[3rem]"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
