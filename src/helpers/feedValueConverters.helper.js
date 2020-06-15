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
