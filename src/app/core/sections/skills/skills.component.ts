import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  languages = {
    Java: 'https://img.icons8.com/color/64/java-coffee-cup-logo--v1.png',
    TypeScript: 'https://img.icons8.com/color/64/typescript.png',
    Python: 'https://img.icons8.com/color/64/python--v1.png',
    HTML: 'https://img.icons8.com/color/64/html-5--v1.png',
    CSS: 'https://img.icons8.com/color/64/css3.png',
    SQL: 'https://e7.pngegg.com/pngimages/395/768/png-clipart-database-administrator-computer-icons-database-symbol-angle-data.png',
  };

  frameworks = {
    Spring: 'https://img.icons8.com/color/64/spring-logo.png',
    Angular: 'https://img.icons8.com/color/96/angularjs.png',
    Django:
      'https://img.icons8.com/external-tal-revivo-filled-tal-revivo/96/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo.png',
    Tailwind: 'https://img.icons8.com/fluency/96/tailwind_css.png',
  };

  db = {
    PostgreSQL: 'https://img.icons8.com/color/64/postgreesql.png',
    MySQL: 'https://img.icons8.com/color/64/mysql-logo.png',
    Oracle:
      'https://5.imimg.com/data5/SELLER/Default/2022/7/FT/WW/IM/7756102/oracle-database-enterprise-edition-license-1-processor.png',
    Dynamo: 'https://img.icons8.com/fluency/96/database--v1.png',
  };

  tools = {
    IntelliJ:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1200px-IntelliJ_IDEA_Icon.svg.png',
    'VS Code':
      'https://blog.kakaocdn.net/dn/wYSD6/btrV5CpA5Gt/7BABhwG1EOLb9T8kdb0mjk/img.png',
    'Data Modeler':
      'https://www.fileeagle.com/data/2022/05/Oracle-SQL-Developer-Data-Modeler.png',
    Office:
      'https://assets-global.website-files.com/61c1a59355a5111db1bdcfe5/64b6901a2b9c232742a6995c_microsoft-365-logo-6D6E233C94-seeklogo.com.png',
  };
}
