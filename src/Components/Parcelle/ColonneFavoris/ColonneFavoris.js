import axios from 'axios';
import React from 'react';
import './ColonneFavoris.scss';
import jwtDecode from 'jwt-decode';

// import PropTypes from 'prop-types';

// Imports images
//import courgetteIcon from '../../../assets/images/imagesLegumes/courgette.png';



export default function ColonneFavoris({favoris, setFavoris}) {

    const deleteFav = (cropId) => {
        const newFavoriteList = favoris.filter((crop) => crop.id !== cropId);
       
        console.log(newFavoriteList);
        

            //Ma requete pour les favoris du user
            const token = localStorage.getItem('token');
            const jwtDecoded = jwtDecode(token);
            setFavoris(newFavoriteList)

            const baseURL = `https://oclock-my-little-garden.herokuapp.com/${jwtDecoded.id}/${cropId}`;//${token.user.id}

            axios.delete(baseURL, {
                        headers: {
                        Authorization: `bearer ${token}`
                        },
                      })   
                      .then((response) => {
                        console.log('reponse :', response); 
                      })
                      .catch((error) => {
                        console.error('error :', error);
                      });
    };   
    return (
        
        <div className="colonneLegume">
            <h3 className="favTittle">Liste des légumes</h3>
            <ul className="listeLegumes">
            { favoris.map((crop, id) => {
                        console.log(crop.id)
            return ( 
                <li key={crop.id} className="vegetableSection">        
                    <p className="vegetable">{crop.name}</p>
                    <img src={crop.crop_img} className="vegetableIcon" alt={`Icone ${crop.name}`}/>
                    <button className="deleteFromFav" onClick={() => deleteFav(crop.id)}>supprimer des favoris</button>
                </li>
            )
        })}

        </ul>
        </div>  
    )}
