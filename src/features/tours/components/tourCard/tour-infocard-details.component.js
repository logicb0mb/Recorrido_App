import React from 'react';
import moment from 'moment';
import mapPin from './../../../../../assets/img/svgs/map-pin';
import calendar from './../../../../../assets/img/svgs/calendar.js';
import flag from './../../../../../assets/img/svgs/flag.js';
import user from './../../../../../assets/img/svgs/user.js';

import {
  CardDetails,
  SubHeadingContainer,
  SubHeading,
  SummaryContainer,
  TourSummary,
  GlimpseDataGrid,
  GlimpseDataGridCell,
  GridCellIcon,
  GridCellText,
} from './tour-infocard-details.styles';

export const TourInfoCardDetails = ({ tour }) => {
  return (
    <CardDetails>
      <SubHeadingContainer>
        <SubHeading>{`${tour.difficulty}  ${tour.duration}-day tour`}</SubHeading>
      </SubHeadingContainer>

      <SummaryContainer>
        <TourSummary>{tour.summary}</TourSummary>
      </SummaryContainer>

      <GlimpseDataGrid>
        <GlimpseDataGridCell>
          <GridCellIcon xml={mapPin} />
          <GridCellText variant="font14px">
            {tour.startLocation.description}
          </GridCellText>
        </GlimpseDataGridCell>

        <GlimpseDataGridCell>
          <GridCellIcon xml={calendar} />
          <GridCellText variant="font14px">
            {moment(tour.startDates[0]).format('MMMM, YYYY')}
          </GridCellText>
        </GlimpseDataGridCell>
      </GlimpseDataGrid>

      <GlimpseDataGrid>
        <GlimpseDataGridCell>
          <GridCellIcon xml={flag} />
          <GridCellText variant="font14px">
            {tour.locations.length} stops
          </GridCellText>
        </GlimpseDataGridCell>

        <GlimpseDataGridCell>
          <GridCellIcon xml={user} />
          <GridCellText variant="font14px">
            {tour.maxGroupSize} people
          </GridCellText>
        </GlimpseDataGridCell>
      </GlimpseDataGrid>
    </CardDetails>
  );
};

export default TourInfoCardDetails;
