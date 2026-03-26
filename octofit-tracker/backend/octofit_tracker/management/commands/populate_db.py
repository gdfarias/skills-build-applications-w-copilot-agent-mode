from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from datetime import date

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Borrar datos existentes
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Equipos
        marvel = Team.objects.create(name='marvel', description='Marvel Team')
        dc = Team.objects.create(name='dc', description='DC Team')

        # Usuarios
        users = [
            User.objects.create(email='tony@stark.com', name='Tony Stark', team='marvel'),
            User.objects.create(email='steve@rogers.com', name='Steve Rogers', team='marvel'),
            User.objects.create(email='bruce@wayne.com', name='Bruce Wayne', team='dc'),
            User.objects.create(email='clark@kent.com', name='Clark Kent', team='dc'),
        ]

        # Actividades
        Activity.objects.create(user='tony@stark.com', type='run', duration=30, date=date(2023, 1, 1))
        Activity.objects.create(user='steve@rogers.com', type='swim', duration=45, date=date(2023, 1, 2))
        Activity.objects.create(user='bruce@wayne.com', type='cycle', duration=60, date=date(2023, 1, 3))
        Activity.objects.create(user='clark@kent.com', type='run', duration=50, date=date(2023, 1, 4))

        # Leaderboard
        Leaderboard.objects.create(team='marvel', points=150)
        Leaderboard.objects.create(team='dc', points=110)

        # Workouts
        Workout.objects.create(name='Pushups', description='Do 20 pushups', difficulty='easy')
        Workout.objects.create(name='Sprints', description='Run 5 sprints', difficulty='medium')
        Workout.objects.create(name='Plank', description='Hold plank for 2 minutes', difficulty='hard')

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data'))
