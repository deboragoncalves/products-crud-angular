import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[forDirective]'
})
export class ForDirective implements OnInit {

  // a entrada da diretiva será uma lista. após a palavra of, irá pegar o array que vier logo depois
  @Input("forDirectiveOf") numbers: number[] = [];

  // injetar dependências
  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { }
  ngOnInit(): void {
    for (let number of this.numbers) {
      // container elemento pai e template elemento filho
      // como segundo argumento, passar um valor implitico que é o elemento da lista, a ser exibido na tela
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }

}
