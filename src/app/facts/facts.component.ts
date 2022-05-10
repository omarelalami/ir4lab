import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  QueryList,OnDestroy
} from "@angular/core";

import { NgsRevealService } from 'ngx-scrollreveal';


@Component({
  selector: "app-facts",
  templateUrl: "./facts.component.html",
  styleUrls: ["./facts.component.scss"]
})
export class FactsComponent implements OnInit, AfterViewInit, OnDestroy {
  title = "Animated Count";

  nums: Array<number> = [25, 76, 48];

  @ViewChild("oneItem") oneItem: any;
  @ViewChildren("count") count: QueryList<any>|any;
  afterRevealSubscription: any;

  constructor(private elRef: ElementRef,private revealService: NgsRevealService) {}
  ngOnDestroy(): void {
    this.afterRevealSubscription.unsubscribe();

  }

  ngOnInit() {
    this.afterRevealSubscription = this.revealService.afterReveal$.subscribe(
      (el: HTMLElement) => {
        this.animateCount();
    });
  }

  ngAfterViewInit() {
    this.animateCount();
  }

  animateCount() {
    let _this = this;

    let single = this.oneItem.nativeElement.innerHTML;

    this.counterFunc(single, this.oneItem, 7000);

    this.count.forEach((item:any) => {
      _this.counterFunc(item.nativeElement.innerHTML, item, 2000);
    });
  }

  counterFunc(end: number, element: any, duration: number) {
    let range, current: number, step, timer: any;

    range = end - 0;
    current = 0;
    step = Math.abs(Math.floor(duration / range));

    timer = setInterval(() => {
      current += 1;
      element.nativeElement.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  }
}
