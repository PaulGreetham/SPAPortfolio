import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from "../../Shared-Components/accordion/accordion.component";
import { StackToolsComponent } from "../../Shared-Components/accordion/stack-tools/stack-tools.component";

export type AccordionItemContent = string | {
  frequentlyUsed: ToolItem[];
  infrequentlyUsed: ToolItem[];
};

export interface AccordionItem {
  title: string;
  content: AccordionItemContent;
}

export interface ToolItem {
  name: string;
  logo: string;
  url: string;
}

@Component({
  selector: 'app-tech',
  standalone: true,
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss'],
  imports: [
    CommonModule,
    AccordionComponent,
    StackToolsComponent,
  ]
})
export class TechComponent {
  techAccordionItems: AccordionItem[] = [
    {
      title: 'Stack & Tools',
      content: {
        frequentlyUsed: [],
        infrequentlyUsed: [],
      }
    },
    {
      title: 'Education',
      content: 'Details about education...'
    },
    {
      title: 'Bootcamps',
      content: 'Information about bootcamps...'
    },
    {
      title: 'Professional',
      content: 'Professional experience details...'
    },
  ];
}
