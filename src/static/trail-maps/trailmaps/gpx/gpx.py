#!/usr/bin/env python3
from argparse import ArgumentParser, Namespace
from datetime import date, datetime

from lxml import etree

from geopy.distance import vincenty


def main(arguments: Namespace):
    aggregated_total_distance = sum(
        track_distance(gpx_file)
        for gpx_file in arguments.gpx_files)
    print('Total distance in kilometers:', aggregated_total_distance)


def track_distance(gpx_file_path: str):
    """Calculate the total distance of a GPX track."""
    root = etree.parse(gpx_file_path).getroot()
    points = root.findall('*//trkpt', root.nsmap)
    distance = sum(
        vincenty(
            (first.get('lat'), first.get('lon')),
            (second.get('lat'), second.get('lon'))
        ).kilometers
        for first, second in zip(
            points[0:], points[1:])
    )
    return distance


def track_day(gpx_file_path: str) -> date:
    """
    Determine the day of a GPX file.
    """
    root = etree.parse(gpx_file_path).getroot()
    points = root.findall('*//trkpt/time', root.nsmap)

    assert points, 'empty GPX file provided {}'.format(gpx_file_path)

    times = {
        datetime.fromisoformat(point.text[:10]).date()
        for point in points
    }
    assert len(times) == 1, 'GPX spans multiple days {}'.format(gpx_file_path)

    return times.pop()


if __name__ == '__main__':
    parser = ArgumentParser()
    parser.add_argument('gpx_files', nargs='+')

    main(parser.parse_args())
