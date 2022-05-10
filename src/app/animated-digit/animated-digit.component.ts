import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  ViewChild,
  OnChanges,
  SimpleChanges,OnDestroy,
  OnInit
} from "@angular/core";
import { NgsRevealService } from 'ngx-scrollreveal';

@Component({
  selector: "animated-digit",
  templateUrl: "animated-digit.component.html",
  styleUrls: ["animated-digit.component.scss"]
})
export class AnimatedDigitComponent implements OnInit,AfterViewInit, OnChanges,OnDestroy {
  afterRevealSubscription: any;
  ngOnDestroy(): void {
    this.afterRevealSubscription.unsubscribe();
  }
  @Input() duration: number|any;
  @Input() digit: number|any;
  @Input() steps: number|any;
  @ViewChild("animatedDigit") animatedDigit: ElementRef|any;
  constructor(private revealService: NgsRevealService){

  }
  ngOnInit(): void {
    this.afterRevealSubscription = this.revealService.afterReveal$.subscribe(
      (el: HTMLElement) => {
        this.animateCount()
    });

  }

  async animateCount() {
    if (!this.duration) {
      this.duration = 1000;
    }

    if (typeof this.digit === "number") {
      this.counterFunc(this.digit, this.duration, this.animatedDigit);
    }
  }

  async counterFunc(endValue:any, durationMs:any, element:any) {
    if (!this.steps) {
      this.steps = 12;
    }

    const stepCount = Math.abs(durationMs / this.steps);
    const valueIncrement = (endValue - 0) / stepCount;
    const sinValueIncrement = Math.PI / stepCount;

    let currentValue = 0;
    let currentSinValue = 0;

    function step() {
      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;

      element.nativeElement.textContent = Math.abs(Math.floor(currentValue));

      if (currentSinValue < Math.PI) {
        window.requestAnimationFrame(step);
      }
    }

    step();
    console.log(this.digit);
  }

  async ngAfterViewInit() {
    if (this.digit) {
      this.animateCount();
    }
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes["digit"]) {
      this.animateCount();
    }
  }
}
