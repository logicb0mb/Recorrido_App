import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  DetailsContainer,
  LogoContainer,
  BackIconContainer,
  BackIcon,
  Logo,
  TourImageContainer,
  TourImage,
  TourDetailsTextContainer,
  TourTitle,
  TourPrice,
  TourSummary,
} from './checkout-tour-details.styles';

export const CheckoutTourDetails = ({ tour, navigation }) => {
  const imageSource = `https://recorrido-shreyas.herokuapp.com/img/tours/${tour.imageCover}`;

  return (
    <DetailsContainer>
      <LogoContainer>
        <TouchableOpacity onPress={() => navigation.navigate('TourDetail')}>
          <BackIconContainer>
            <BackIcon name="arrow-left" size={24} color="black" />
          </BackIconContainer>
        </TouchableOpacity>
        <Logo source={require('../../../../assets/icon.png')} />
      </LogoContainer>
      <TourImageContainer>
        <TourImage source={{ uri: imageSource }} resizeMode="cover" />
      </TourImageContainer>
      <TourDetailsTextContainer>
        <TourTitle>{`${tour.name} Tour`}</TourTitle>
        <TourPrice> {`$${tour.price}.00`} </TourPrice>
        <TourSummary>{tour.summary}</TourSummary>
      </TourDetailsTextContainer>
    </DetailsContainer>
  );
};
