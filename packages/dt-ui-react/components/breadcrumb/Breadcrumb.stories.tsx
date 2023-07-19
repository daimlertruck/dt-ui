import { Breadcrumb } from './Breadcrumb';

export default {
  title: 'Data Display/Breadcrumb',
  component: Breadcrumb,
};

export const Default = () => {
  const breadcrumbs = [
    { active: false, href: '/', name: 'Name 1' },
    { active: true, name: 'Name 2' },
  ];

  return (
    <Breadcrumb>
      <Breadcrumb.List>
        {breadcrumbs.map((breadcrumb, index) => (
          <Breadcrumb.Item key={`${breadcrumb.name}-${index}`}>
            {breadcrumb.active ? (
              breadcrumb.name
            ) : (
              <Breadcrumb.Anchor href={breadcrumb.href}>
                {breadcrumb.name}
              </Breadcrumb.Anchor>
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb.List>
    </Breadcrumb>
  );
};
