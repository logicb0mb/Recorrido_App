import React from 'react';
import moment from 'moment';
import { Heading } from '../../../../components/typography/heading.component';
import {
  FlexView,
  FlexViewFirstChild,
  FlexViewSecondChild,
  OverviewBox,
  ViewUnstyled,
  OverviewBoxGroup,
  OverviewBoxDetail,
  OverviewBoxIcon,
  OverviewBoxLabel,
  OverviewBoxText,
  OverviewBoxImage,
} from './styles/tour-details__overview.styles.js';

export const TourDetailsOverviewBox = ({ tour = {} }) => {
  return (
    <OverviewBox>
      <ViewUnstyled>
        <OverviewBoxGroup>
          <Heading content="Quick Facts" />
          <OverviewBoxDetail>
            <FlexView>
              <FlexViewFirstChild>
                <OverviewBoxIcon name="calendar" color="#45d9fd" size={25} />
                <OverviewBoxLabel>Next Date</OverviewBoxLabel>
              </FlexViewFirstChild>
              <FlexViewSecondChild>
                <OverviewBoxText>
                  {moment(tour.startDates[0]).format('MMMM  YYYY')}
                </OverviewBoxText>
              </FlexViewSecondChild>
            </FlexView>
          </OverviewBoxDetail>
          <OverviewBoxDetail>
            <FlexView>
              <FlexViewFirstChild>
                <OverviewBoxIcon name="trending-up" color="#45d9fd" size={25} />
                <OverviewBoxLabel>Difficulty</OverviewBoxLabel>
              </FlexViewFirstChild>
              <FlexViewSecondChild>
                <OverviewBoxText>{tour.difficulty}</OverviewBoxText>
              </FlexViewSecondChild>
            </FlexView>
          </OverviewBoxDetail>
          <OverviewBoxDetail>
            <FlexView>
              <FlexViewFirstChild>
                <OverviewBoxIcon name="user" color="#45d9fd" size={25} />
                <OverviewBoxLabel>Tourists</OverviewBoxLabel>
              </FlexViewFirstChild>
              <FlexViewSecondChild>
                <OverviewBoxText>{`${tour.maxGroupSize} people`}</OverviewBoxText>
              </FlexViewSecondChild>
            </FlexView>
          </OverviewBoxDetail>
          <OverviewBoxDetail style={{ marginBottom: -20 }}>
            <FlexView>
              <FlexViewFirstChild>
                <OverviewBoxIcon name="star" color="#45d9fd" size={25} />
                <OverviewBoxLabel>Rating</OverviewBoxLabel>
              </FlexViewFirstChild>
              <FlexViewSecondChild>
                <OverviewBoxText>{`${tour.ratingsAverage} / 5`}</OverviewBoxText>
              </FlexViewSecondChild>
            </FlexView>
          </OverviewBoxDetail>
        </OverviewBoxGroup>
        <OverviewBoxGroup>
          <Heading content="Your Tour Guides" />
          {tour.guides.map((guide) => (
            <OverviewBoxDetail>
              <FlexView>
                <FlexViewFirstChild>
                  <OverviewBoxImage
                    source={{
                      uri: `https://recorrido-shreyas.herokuapp.com/img/users/${guide.photo}`,
                    }}
                  />
                  <OverviewBoxLabel>
                    {guide.role === 'lead-guide' ? 'Lead Guide' : 'Tour Guide'}
                  </OverviewBoxLabel>
                </FlexViewFirstChild>
                <FlexViewSecondChild>
                  <OverviewBoxText>{guide.name}</OverviewBoxText>
                </FlexViewSecondChild>
              </FlexView>
            </OverviewBoxDetail>
          ))}
        </OverviewBoxGroup>
      </ViewUnstyled>
    </OverviewBox>
  );
};
