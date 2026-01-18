import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { Skeleton } from '@/components/ui/skeleton';

export const BlogListSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <Card key={i}>
        <CardHeader>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-6 w-full" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </CardContent>
      </Card>
    ))}
  </div>
);


export const BlogDetailSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-64 w-full rounded-lg" />
    <Skeleton className="h-8 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </div>
);