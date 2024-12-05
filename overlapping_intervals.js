function merge_intervals(intervals) {
    let merged_intervals = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        if (merged_intervals[merged_intervals.length - 1][1] >= intervals[i][0]) {
            
            merged_intervals[merged_intervals.length - 1][1] = Math.max(
                merged_intervals[merged_intervals.length - 1][1],
                intervals[i][1]
            );
        } else {
            merged_intervals.push(intervals[i]);
        }
    }

    console.log(merged_intervals);
    return merged_intervals;
}

merge_intervals([[1, 3], [2, 4], [6, 8]]);
