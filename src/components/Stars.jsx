import React from 'react';
import { Rate } from 'antd';

const Star = ({ starRate }) => <Rate disabled defaultValue={starRate} />;

export default Star;