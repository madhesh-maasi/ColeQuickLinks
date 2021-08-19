import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './DocumentImageGalleryWebPart.module.scss';
import * as strings from 'DocumentImageGalleryWebPartStrings';

import "../../ExternalRef/Css/style.css";

export interface IDocumentImageGalleryWebPartProps {
  description: string;
}

export default class DocumentImageGalleryWebPart extends BaseClientSideWebPart<IDocumentImageGalleryWebPartProps> 
{


  public render(): void {
    var SiteURL=this.context.pageContext.web.absoluteUrl;
    this.domElement.innerHTML = `
      <div class="DefaultDocuments">
        <div class="gallery">
  <a href="#" onClick='window.open("${SiteURL}/Design/Forms/AllItems.aspx")'>
   <div class="design"></div>
  </a>     
</div>
<div class="gallery"> 
  <a href="#" onClick='window.open("${SiteURL}/Sales/Forms/AllItems.aspx")'>
    <div class="sales"></div>
  </a>
</div>        
 
<div class="gallery">
  <a href="#" onClick='window.open("${SiteURL}/Project%20Documents/Forms/AllItems.aspx")'>
  <div class="projectdocuments"></div>
  </a>
</div>
 
<div class="gallery">
  <a href="#" onClick='window.open("${SiteURL}/Emails/Forms/AllItems.aspx")'>
  <div class="Emails"></div>
  </a>
</div>

<div class="gallery">
  <a href="#" onClick='window.open("${SiteURL}/Site%20Photos/Forms/AllItems.aspx")'>
  <div class="sitephotos"></div>
  </a>
</div>
      </div>`;
  }


  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
