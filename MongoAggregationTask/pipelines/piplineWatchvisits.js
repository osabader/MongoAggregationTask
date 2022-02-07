
export function piplineWatchvisits() {
    const piplineWatchvisits = [
        {
            '$project': {
                'client': 1,
                'time': 1
            }
        }
    ];
    return piplineWatchvisits;
}