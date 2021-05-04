import React from 'react';
import styled from 'styled-components/native';

const MyText = styled.Text``;
export const MapCallout = ({ tour }) => <MyText>{tour.name}</MyText>;
