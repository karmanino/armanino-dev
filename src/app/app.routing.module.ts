import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about.component";
import { ContactComponent } from "./pages/contact.component";
import { EducationComponent } from "./pages/education.component";
import { MainComponent } from "./pages/main.component";
import { PortfolioComponent } from "./pages/portfolio.component";

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'home',
        component: MainComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'education',
        component: EducationComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**',
        pathMatch: "full",
        component: MainComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule{

}