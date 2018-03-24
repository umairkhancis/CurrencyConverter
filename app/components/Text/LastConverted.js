import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

import styles from './styles';

const LastConverted = (props) => {
    const {base, quote, date, conversionRate} = props;
    return (
        <Text style={styles.smallText}>
            1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
        </Text>
    );
};

LastConverted.propTypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number,
};

export default LastConverted;
