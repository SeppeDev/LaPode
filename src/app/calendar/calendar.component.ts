import { Booking } from './../models/booking';
import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { startOfDay, endOfDay, isSameDay, isSameMonth, format } from 'date-fns';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { Entry } from 'contentful';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
};

@Component({
  selector: 'calendar-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() booking: Entry<Booking>;
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  refresh: Subject<any> = new Subject();

  activeDayIsOpen = false;

  constructor() {}

  ngOnInit(): void {
    if (this.booking) {
      this.addEvent(this.booking);
    }
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }

  addEvent(booking: any): void {
    this.events.push({
      title: `Le Grenier booked from ${format(booking.startDate, 'DD/MM/YYYY')} to ${format(
        booking.endDate,
        'DD/MM/YYYY',
      )}`,
      start: startOfDay(booking.startDate),
      end: endOfDay(booking.endDate),
      color: colors.red,
    });
    this.refresh.next();
  }
}
