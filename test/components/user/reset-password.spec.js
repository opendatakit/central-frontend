import UserList from '../../../lib/components/user/list.vue';
import UserResetPassword from '../../../lib/components/user/reset-password.vue';
import testData from '../../data';
import { mockHttp, mockRoute } from '../../http';
import { mockLogin } from '../../session';
import { trigger } from '../../util';

describe('UserResetPassword', () => {
  beforeEach(mockLogin);

  describe('modal', () => {
    it('is initially hidden', () =>
      mockHttp()
        .mount(UserList)
        .respondWithData(() => testData.standardUsers.sorted())
        .respondWithData(() =>
          testData.standardUsers.sorted().map(testData.toActor))
        .afterResponses(component => {
          component.first(UserResetPassword).getProp('state').should.be.false();
        }));

    it('opens after button click', () =>
      mockHttp()
        .mount(UserList)
        .respondWithData(() => testData.standardUsers.sorted())
        .respondWithData(() =>
          testData.standardUsers.sorted().map(testData.toActor))
        .afterResponses(component =>
          trigger.click(component, '#user-list-table .dropdown-menu a'))
        .then(component => {
          component.first(UserResetPassword).getProp('state').should.be.true();
        }));
  });

  it('standard button thinking things', () =>
    mockHttp()
      .mount(UserResetPassword, {
        propsData: { user: testData.standardUsers.first() }
      })
      .request(component =>
        trigger.click(component, '#user-reset-password-button'))
      .standardButton('#user-reset-password-button'));

  describe('after successful response', () => {
    let app;
    beforeEach(() => mockRoute('/users')
      .respondWithData(() => testData.standardUsers.sorted())
      .respondWithData(() =>
        testData.standardUsers.sorted().map(testData.toActor))
      .afterResponse(component => {
        app = component;
      })
      .request(() => trigger.click(app, '#user-list-table .dropdown-menu a')
        .then(() => trigger.click(app, '#user-reset-password-button')))
      .respondWithSuccess());

    it('modal hides', () => {
      app.first(UserResetPassword).getProp('state').should.be.false();
    });

    it('success message is shown', () => {
      app.should.alert('success');
    });
  });
});
