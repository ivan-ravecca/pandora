import { useContext, useState } from "react";
import Modal from "./Modal";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import React from "react";
import AdoptedPetContext from "./AdoptedPetContext";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  //eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">😵‍</h2>
      </div>
    );
  }
  const pet = results.data.pets[0];
  return (
    <div
      className="details"
      onKeyUp={(e) => {
        console.log(e);
        if (e.key === "Escape") {
          setShowModal(false);
        }
      }}
      role="button"
      tabIndex="0"
    >
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            Adopt {pet.name}
          </button>
          <p>{pet.description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Wanna adopt {pet.name}?</h1>
                <div className="buttons">
                  <button
                    onClick={() => {
                      console.log("Fantastic!");
                      setAdoptedPet(pet);
                      navigate("/");
                    }}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => {
                      console.log("Saad");
                      setShowModal(false);
                    }}
                  >
                    No
                  </button>
                </div>
              </div>
            </Modal>
          ) : null}
        </h2>
      </div>
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
export default DetailsErrorBoundary;
