import _ from 'lodash';
import moment from 'moment';
import { feedTypes, feedUnits } from 'constants/feed.constant';

const convertSeconds = value => {
    if(value) {
        const hrs = Math.floor(value / 3600);
        const min = Math.floor((value - (hrs * 3600)) / 60);
        let sec = value - (hrs * 3600) - (min * 60);
        sec = Math.round(sec * 100) / 100;

        const hrsString = hrs > 0 ? `${hrs} ${feedUnits.H} ` : '';
        const minString = min > 0 ? `${min} ${feedUnits.MIN} ` : '';
        const secString = sec > 0 ? `${sec} ${feedUnits.SEC} ` : '';

        return hrsString + minString + secString;
    }
};

export const getFeedValueByType = feed => {
    if(feed) {
        const type = feed.type && feed.type.toUpperCase();
        if(type === feedTypes.WALKING) {
            return feed && `${feed.steps} ${feedUnits.STEPS}`
        }
        if(type === feedTypes.RUNNING || type === feedTypes.CYCLING) {
            const distance = feed && (feed.distance / 1000).toFixed(2);
            const duration = feed && convertSeconds(feed.duration);
            return `${distance} ${feedUnits.KM} - ${duration}`
        }
    }
};

export const groupFeedByDay = feeds => {
    if(feeds && feeds.length > 0) {
        return _.groupBy(feeds, feed => {
            return moment(feed.date).startOf('day').format();
        });
    }
};

export const convertDate = value => {
    if(!!value) {
        const instanceDate = new Date(value);
        const dayOfDate = instanceDate.getDate();
        const monthOfDate = instanceDate.getMonth();
        const yearOfDate = instanceDate.getFullYear();

        const instanceToday = new Date();
        const dayOfToday = instanceToday.getDate();
        const monthOfToday = instanceToday.getMonth();
        const yearOfToday = instanceToday.getFullYear();

        if( dayOfToday === dayOfDate &&
            monthOfToday === monthOfDate &&
            yearOfToday === yearOfDate ) {
            return feedUnits.TODAY;
        }
        if( dayOfToday - dayOfDate === 1 &&
            monthOfToday === monthOfDate &&
            yearOfToday === yearOfDate ) {
            return feedUnits.YESTERDAY;
        }
        return `${dayOfDate} / ${monthOfDate} / ${yearOfDate}`
    }
};
