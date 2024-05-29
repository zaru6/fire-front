import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Category } from '../category.model';
import { ModelService } from '../model.service';
import { Subcategory } from '../subcategory.model';
import { TopicService } from '../topic.service';
import { TopicReplyService } from '../topic-reply.service';
import { Topic } from '../topic.model';
import { TopicReply } from '../topic-reply.model';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent {
  selectedIndex = 0;
  products: Product[] = [];
  categories: Category[] = [];
  subcategories: Subcategory[] = [];
  topics: Topic[] = [];
  topicReplies: TopicReply[] = [];

  constructor(
    private productService: ProductService, 
    private modelService: ModelService, 
    private topicService: TopicService,
    private topicReplyService: TopicReplyService,
    private http: HttpClient, 
    private router: Router, 
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
    this.modelService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.modelService.getSubcategories().subscribe(subcategories => {
      this.subcategories = subcategories;
    });
    this.topicService.getTopics().subscribe(topics => {
      this.topics = topics;
    });
    this.topicReplyService.getAllTopicReplies().subscribe(topicReplies => {
      this.topicReplies = topicReplies;
    });
  }

  selectTab(index: number) {
    this.selectedIndex = index;
  }
}
