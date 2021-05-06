import React from 'react';

import { CompactTourInfo } from '../../../components/tour/compact-tour-info.component';

export const MapCallout = ({ tour }) => (
  <CompactTourInfo inMapCallout={true} tour={tour} />
);
