import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPeople, fetchPersonDetails, clearSelectedPerson } from '../redux/slices/peopleSlice';
import PersonCard from './PersonCard';
import PersonDetails from './PersonDetails';
import Loader from './Loader';

const PersonList = () => {
  const dispatch = useDispatch();
  const { list, selectedPerson, loading, detailsLoading, error } = useSelector(
    (state) => state.people
  );

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  const handlePersonClick = (id) => {
    dispatch(fetchPersonDetails(id));
  };
  const handleCloseDetails = () => {
    dispatch(clearSelectedPerson());
  };
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <div className="error-message">
        Помилка: {error}
      </div>
    );
  }

  return (
    <div>
      <div className="person-list">
        {list.map((person, index) => (
          <PersonCard
            key={index}
            person={person}
            onClick={handlePersonClick}
          />
        ))}
      </div>

      {detailsLoading && (
        <div className="loader-overlay">
          <Loader />
        </div>
      )}

      {selectedPerson && !detailsLoading && (
        <PersonDetails 
          person={selectedPerson} 
          onClose={handleCloseDetails} 
        />
      )}
    </div>
  );
};

export default PersonList;