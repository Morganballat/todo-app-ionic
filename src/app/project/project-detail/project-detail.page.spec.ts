import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectDetailPage } from './project-detail.page';

describe('ProjectPage', () =>
{
  let component: ProjectDetailPage;
  let fixture: ComponentFixture<ProjectDetailPage>;

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(ProjectDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
