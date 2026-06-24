import { test } from '../fixtures';

test('Register and Login New User in ParaBank', async ({ loginPage, registerPage }) => {
  test.setTimeout(180000);

  const username = `user${Date.now()}`;
  const password = 'demo123';

  await registerPage.goto();
  await registerPage.register({
    firstName: 'Amith',
    lastName: 'Kumar',
    addressStreet: 'Bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    zipCode: '560001',
    phoneNumber: '9999999999',
    ssn: Date.now().toString(),
    username,
    password,
  });

  await registerPage.expectRegistrationSuccess();

  await loginPage.logout();
  await loginPage.goto();
  await loginPage.login(username, password);
  await loginPage.expectAccountsOverviewVisible();
});
